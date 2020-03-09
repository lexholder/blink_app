namespace :routine do
  desc "Generate morning exercise routine for all users"
  task generate_morning: :environment do
    users = User.all
    users.each do |user|
      offset = rand(Exercise.count)
      rand_exercise = Exercise.offset(offset).first
      rep = Recommendation.recommend_repetitions_morning(user)
      Routine.create!({user: user, exercise: rand_exercise, date: Date.today, time_of_day: "morning", completed: false, repetition: rep})
    end
  end

  desc "Generate night exercise routine for all users"
  task generate_night: :environment do
    users = User.all
    users.each do |user|
      offset = rand(Exercise.count)
      rand_exercise = Exercise.offset(offset).first
      rep = Recommendation.recommend_repetitions_night(user)
      Routine.create!({user: user, exercise: rand_exercise, date: Date.today, time_of_day: "night", completed: false, repetition: rep})
    end
  end

  desc "Send emails"
  task send_email_morning: :environment do
    @setting = Setting.all.select { |r| r.morning_notification_active == true }
    @setting.each do |setting|
      UserMailer.with(user: setting.user).morning_notification.deliver_now
    end
  end

  task send_email_night: :environment do
    @setting = Setting.all.select { |r| r.night_notification_active == true }
    @setting.each do |setting|
      UserMailer.with(user: setting.user).night_notification.deliver_now
    end
  end
end

desc "Send email to Alex"
task send_alex_email: :environment do
  puts "sending email..."
  user = User.find_by(email: "lexholder@gmail.com")
  UserMailer.with(user: user).night_notification.deliver_now
end

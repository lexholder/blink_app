namespace :routine do
  desc "Generate morning and night exercise routine"
  task morning_night: :environment do
    users = User.all
    users.each do |user|
      offset = rand(Exercise.count)
      rand_exercise = Exercise.offset(offset).first
      Routine.create!({user: user, exercise: rand_exercise, date: Date.today, time_of_day: "morning", completed: false, repetition: 4})

      offset = rand(Exercise.count)
      rand_exercise = Exercise.offset(offset).first
      Routine.create!({user: user, exercise: rand_exercise, date: Date.today, time_of_day: "night", completed: false, repetition: 4})
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

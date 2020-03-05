namespace :routine do
  desc "Generate morning and night exercise routine"
  task morning_night: :environment do
    users = User.all
    users.each do |user|
      offset = rand(Exercise.count)
      rand_exercise = Exercise.offset(offset).first
      Routine.create!({user: user, exercise: rand_exercise, date: Date.today, time_of_day: "morning", completed: false, duration: 60})

      offset = rand(Exercise.count)
      rand_exercise = Exercise.offset(offset).first
      Routine.create!({user: user, exercise: rand_exercise, date: Date.today, time_of_day: "night", completed: false, duration: 60})
    end
  end
end

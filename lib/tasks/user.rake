namespace :user do
  desc "creating the computer time instance for today, initialized at 0 minute"
  task create_all_computer_time: :environment do
    User.all.each do |user|
      ComputerTime.create(user: user, date: Date.today, minutes: 0)
    end
  end
end

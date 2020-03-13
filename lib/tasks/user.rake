namespace :user do
  desc "creating the computer time instance for today, initialized at 0 minute"
  task create_all_computer_time: :environment do
    users = User.all.select { |user| (Time.now.utc + user.timezone).hour == 1 }
    users.each do |user|
      ComputerTime.create(user: user, date: (Time.now.utc + user.timezone).to_date, minutes: 0)
    end
  end
end

# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview


  # Preview this email at http://localhost:3000/rails/mailers/user_mailer/welcome

  def morning_notification
    @setting = Setting.all.select { |r| r.morning_notification_active == true }
    UserMailer.with(user: @setting.first.user).morning_notification
  end

  def night_notification
    @setting = Setting.all.select { |r| r.night_notification_active == true }
    UserMailer.with(user: @setting.first.user).night_notification
  end
end

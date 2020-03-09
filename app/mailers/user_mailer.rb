class UserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.welcome.subject
  #


  def morning_notification
    @user = params[:user]
    mail(to: @user.email, subject: "Reminder: Morning Blinking Exercise!")
  end

  def night_notification
    @user = params[:user]
    mail(to: @user.email, subject: "Reminder: Nightly Blinking Exercise!")
  end
end

# user = User.find_by(email: "ines.belghiti@gmail.com")
# UserMailer.with(user: user).morning_notification.deliver_now

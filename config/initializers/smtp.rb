ActionMailer::Base.smtp_settings = {
  address: "smtp.gmail.com",
  port: 587,
  domain: 'gmail.com',
  user_name: ENV['the.blink.app367@gmail.com'],
  password: ENV['hello123!@'],
  authentication: :login,
  enable_starttls_auto: true
}

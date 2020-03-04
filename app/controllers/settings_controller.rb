class SettingsController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:toggle_eye_break_notification]
  def edit
  end

  def toggle_morning_notification
  end

  def toggle_night_notification
  end

  def update_night_time
  end

  def update_morning_time
  end

  def toggle_eye_break_notification
    if current_user.setting.eye_break_notification_active
      current_user.setting.update(eye_break_notification_active: false)
    else
      current_user.setting.update(eye_break_notification_active: true)
    end
  end
end

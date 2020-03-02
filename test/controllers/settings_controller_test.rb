require 'test_helper'

class SettingsControllerTest < ActionDispatch::IntegrationTest
  test "should get edit" do
    get settings_edit_url
    assert_response :success
  end

  test "should get toggle_morning_notification" do
    get settings_toggle_morning_notification_url
    assert_response :success
  end

  test "should get toggle_night_notification" do
    get settings_toggle_night_notification_url
    assert_response :success
  end

  test "should get update_night_time" do
    get settings_update_night_time_url
    assert_response :success
  end

  test "should get update_morning_time" do
    get settings_update_morning_time_url
    assert_response :success
  end

  test "should get toggle_eye_break_notification" do
    get settings_toggle_eye_break_notification_url
    assert_response :success
  end

end

require 'test_helper'

class ComputerTimesControllerTest < ActionDispatch::IntegrationTest
  test "should get update_one_min" do
    get computer_times_update_one_min_url
    assert_response :success
  end

end

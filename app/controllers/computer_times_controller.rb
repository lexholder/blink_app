class ComputerTimesController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:update_one_min]

  def update_one_min
    computer_time = current_user.computer_times.find { |c| c.date == Date.today }
    if computer_time
      computer_time.update(minutes: computer_time.minutes + 1)
    end
  end
end

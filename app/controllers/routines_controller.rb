class RoutinesController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:complete_morning_routine, :complete_nigth_routine]

  def complete_morning_routine
    routine_morning = current_user.routines.find { |r| r.date == Date.today && r.time_of_day == "morning"}
    routine_morning.update(completed: true)
  end

  def complete_nigth_routine
    routine_night = current_user.routines.find { |r| r.date == Date.today && r.time_of_day == "night"}
    routine_night.update(completed: true)
  end
end

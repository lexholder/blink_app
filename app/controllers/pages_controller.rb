class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :signup, :login]

  def dashboard
    @routine_morning = current_user.routines.find { |r| r.date == Date.today && r.time_of_day == "morning"}
    @routine_night = current_user.routines.find { |r| r.date == Date.today && r.time_of_day == "night"}
    @computer_time = current_user.computer_times.find { |c| c.date == Date.today }
    if request.headers["HTTP_USER_AGENT"].scan(/iPhone/).empty?
      render :desktop_dashboard
    else
      render :mobile_dashboard
    end
  end

  def home
    if request.headers["HTTP_USER_AGENT"].scan(/iPhone/).empty?
      render :desktop_home
    else
      render :mobile_home
    end
  end
end

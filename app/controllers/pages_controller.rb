class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :signup, :login]

  def dashboard
    @routine_morning = current_user.routines.find { |r| r.date == (Time.now.utc + current_user.timezone).to_date && r.time_of_day == "morning"}
    @routine_night = current_user.routines.find { |r| r.date == (Time.now.utc + current_user.timezone).to_date && r.time_of_day == "night"}
    @computer_time = current_user.computer_times.find { |c| c.date == (Time.now.utc + current_user.timezone).to_date }
    if request.user_agent.downcase.match(/mobile|android|iphone|blackberry|iemobile|kindle/)
      @tab = 'dashboard'
      render :mobile_dashboard
    else
      @exercises = Exercise.all
      render :desktop_dashboard
    end
  end

  def home
    if request.user_agent.downcase.match(/mobile|android|iphone|blackberry|iemobile|kindle/)
      render :mobile_home
    else
      render :desktop_home
    end
  end
end

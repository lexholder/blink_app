class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def dashboard
    if request.headers["HTTP_USER_AGENT"].scan(/iPhone/).empty?
      render :desktop_dashboard
    else
      render :mobile_dashboard
    end
  end

  def home
    if current_user
      dashboard
    else
      if request.headers["HTTP_USER_AGENT"].scan(/iPhone/).empty?
        render :desktop_home
      else
        render :mobile_home
      end
    end
  end
end

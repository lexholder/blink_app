class ResourcesController < ApplicationController
  def index
    if request.user_agent.downcase.match(/mobile|android|iphone|blackberry|iemobile|kindle/)
      @tab = 'resources'
    else
      redirect_to '/dashboard'
    end
  end
end

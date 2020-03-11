class ExercisesController < ApplicationController
  def index
    if request.user_agent.downcase.match(/mobile|android|iphone|blackberry|iemobile|kindle/)
      @exercises = Exercise.all
      @tab = 'exercises'
    else
      redirect_to '/dashboard'
    end
  end
end

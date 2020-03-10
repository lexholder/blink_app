class ExercisesController < ApplicationController
  def index
    @exercises = Exercise.all
    @tab = 'exercises'
  end
end

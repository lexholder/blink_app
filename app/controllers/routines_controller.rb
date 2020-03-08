require 'json'
require 'open-uri'

class RoutinesController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:complete_morning_routine, :complete_night_routine]

  def complete_morning_routine
    routine_morning = current_user.routines.find { |r| r.date == Date.today && r.time_of_day == "morning"}
    routine_morning.update(completed: true)
  end

  def complete_night_routine
    routine_night = current_user.routines.find { |r| r.date == Date.today && r.time_of_day == "night"}
    routine_night.update(completed: true)
  end

  private

  def fetchWeather
    key = "a2151ae0bc97d9937b6f405185f790ff";
    city = "Montreal"
    url = "https://api.openweathermap.org/data/2.5/weather?q=#{city}&units=metric&appid=#{key}"
    return JSON.parse(open(url).read)
  end

  def humidity
    fetchWeather()["main"]["humidity"]
  end

  def temperature
    fetchWeather()["main"]["temp"]
  end
end

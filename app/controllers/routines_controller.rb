require 'json'
require 'open-uri'

class RoutinesController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:fetchWeather, :complete_morning_routine, :complete_night_routine]

  def complete_morning_routine
    routine_morning = current_user.routines.find { |r| r.date == Date.today && r.time_of_day == "morning"}
    routine_morning.update(completed: true)
  end

  def complete_night_routine
    routine_night = current_user.routines.find { |r| r.date == Date.today && r.time_of_day == "night"}
    routine_night.update(completed: true)
  end

  def fetch_weather
    city = current_user.city.split(',').map{ |el| el.split().join('%20')}.join(',')
    url = "https://api.openweathermap.org/data/2.5/weather?q=#{}&units=metric&appid=#{ENV["WEATHER_KEY"]}"
    data = JSON.parse(open(url).read)
    render json: data
  end

end

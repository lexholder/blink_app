class Recommendation

  def self.recommend_repetitions_morning(user)
    return 4
  end

  def self.recommend_repetitions_night(user)
    return 4
  end

  private

  def self.fetch_weather_infos(user)
    city = user.city
    url = "https://api.openweathermap.org/data/2.5/weather?q=#{city}&units=metric&appid=#{ENV["WEATHER_KEY"]}"
    return JSON.parse(open(url).read)
  end

  def self.fetch_humidity
    fetch_weather_infos()["main"]["humidity"]
  end

  def self.fetch_temperature
    fetch_weather_infos()["main"]["temp"]
  end

end

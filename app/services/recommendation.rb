class Recommendation

  def self.recommend_repetitions_morning(user)
    humidity = fetch_humidity(user)
    temperature = fetch_temperature(user)
    screen_time = user.computer_times.find { |c| c.date == Date.today.prev_day }
    points = 0
    if humidity > 50
      points += 1
    end
    if temperature > 30
      points += 1
    end
    if screen_time
      if screen_time.minutes < 180
        points += 2
      elsif screen_time.minutes < 360
        points += 1
      end
    else
      points += 2
    end
    if points >= 3
      rep = 4
    elsif points >= 1
      rep = 8
    else
      rep = 12
    end
    return rep
  end

  def self.recommend_repetitions_night(user)
    humidity = fetch_humidity(user)
    temperature = fetch_temperature(user)
    screen_time = user.computer_times.find { |c| c.date == Date.today }
    points = 0
    if humidity > 50
      points += 1
    end
    if temperature > 30
      points += 1
    end
    if screen_time
      if screen_time.minutes < 180
        points += 2
      elsif screen_time.minutes < 360
        points += 1
      end
    else
      points += 2
    end
    if points >= 3
      rep = 4
    elsif points >= 1
      rep = 8
    else
      rep = 12
    end
    return rep
  end

  private

  def self.fetch_weather_infos(user)
    city = user.city
    url = "https://api.openweathermap.org/data/2.5/weather?q=#{city}&units=metric&appid=#{ENV["WEATHER_KEY"]}"
    return JSON.parse(open(url).read)
  end

  def self.fetch_humidity(user)
    fetch_weather_infos(user)["main"]["humidity"]
  end

  def self.fetch_temperature(user)
    fetch_weather_infos(user)["main"]["temp"]
  end

end

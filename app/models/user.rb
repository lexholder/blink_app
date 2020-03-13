class User < ApplicationRecord
  before_save :update_timezone
  after_create :add_default_settings, :create_todays_computer_time, :generate_todays_routines
  has_many :computer_times
  has_many :routines, dependent: :destroy
  has_many :exercises, through: :routines
  has_one :setting, dependent: :destroy
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  private

  def update_timezone
    lat_lon = Geocoder.search(self.city).first.coordinates
    lat = lat_lon[0]
    lon = lat_lon[1]
    self.timezone = Timezone.lookup(lat, lon).utc_offset
  end

  def add_default_settings
    Setting.create(user: self)
  end

  def create_todays_computer_time
    ComputerTime.create(user: self, date: (Time.now.utc + user.timezone).to_date, minutes: 0)
  end

  def generate_todays_routines
    offset = rand(Exercise.count)
    rand_exercise = Exercise.offset(offset).first
    rep = Recommendation.recommend_repetitions_morning(self)
    Routine.create!({user: self, exercise: rand_exercise, date: (Time.now.utc + self.timezone).to_date, time_of_day: "morning", completed: false, repetition: rep})
    if (Time.now.utc + self.timezone).hour > 17
      offset = rand(Exercise.count)
      rand_exercise = Exercise.offset(offset).first
      rep = Recommendation.recommend_repetitions_night(self)
      Routine.create!({user: self, exercise: rand_exercise, date: (Time.now.utc + self.timezone).to_date, time_of_day: "night", completed: false, repetition: rep})
    end
  end

end

class User < ApplicationRecord
  after_save :add_default_settings
  has_many :routines, dependent: :destroy
  has_many :exercises, through: :routines
  has_one :setting, dependent: :destroy
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  def add_default_settings
    Setting.create(user: self)
  end
end

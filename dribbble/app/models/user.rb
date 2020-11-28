class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  # all user sign up logics in the gem.
  has_many :shots, dependent: :destroy
  # remember the syntax of dependent destroy
end

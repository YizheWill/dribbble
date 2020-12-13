json.extract! user, :id, :username, :session_token, :name, :bio, :avatar_url, :email, :personal_url, :portfolio_url, :portfolio_password, :twitter, :facebook, :github, :available
json.shots user.shots.pluck(:title, :image_url, :image_or_video)
# json.shots user.shots do |shot|
# json.id shot.id
# json.image_url shot.image_url
# end

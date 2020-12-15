json.extract! user, :id, :username, :session_token, :name, :bio, :avatar_url, :email, :personal_url, :portfolio_url, :portfolio_password, :twitter, :facebook, :github, :available, :location, :created_at, :tier

json.shots user.shots do |shot|
  json.id shot.id
  json.imageUrl shot.image_url
  json.artistName user.name
  json.avatarUrl user.avatar_url
  # json.title shot.title
  # json.likes shot.likes
  # json.comments shot.comments
  # json.likes shot.likes
end

json.collections user.collections do |collection|
  json.id collection.id
  json.collectionImages collection.shots
end

OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, ENV['935996150117-92bbk24nerdr75c46d33lt4vcv48ubiq.apps.googleusercontent.com
'], ENV['6HlXIW28xa-QnpFgLVXKHKAl']
end

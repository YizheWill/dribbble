class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i(show edit update destroy)

  def user_json(user)
    { name: user.name, username: user.username, bio: user.bio, avatarUrl: user.avatar_url, email: user.email, location: user.location, personal_url: user.personal_url, portfolio_password: user.portfolio_password, twitter: user.twitter, facebook: user.facebook, github: user.github, available: user.available }
  end

  def index
    @users = User.all
    @users = @user.inject({}) { |acc, user| acc[user.id] = user_json(user) }
    render json: @users.to_json
  end

  def show
    p @user
    render json: user_json(@user).to_json
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: user_json(@user).to_json
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    if @user.update(user_params)
      render user_json(@user)
    else
      render json: { error: 'invalid user' }.to_json
    end
  end

  def destroy
    @user.destroy
    render json: { messsage: 'user deleted' }.to_json
  end

  private

  def set_user
    p params
    @user = User.find_by(id: params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :username, :email, :password, :tier, :bio, :location, :personal_url, :portfolio_url, :portfolio_password, :twitter, :facebook, :github, :available, :avatar_url)
  end
end

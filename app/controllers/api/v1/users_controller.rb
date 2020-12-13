class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_user, only: %i(show update destroy)

  def index
    @users = User.all
  end

  def show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render :show
    else
      render json: { error: @user.errors.full_messages }.to_json, status: 422
    end
  end

  def update
    if @user.update(user_params)
      render :show
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
    @user = User.find_by(id: params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :username, :email, :password, :tier, :bio, :location, :personal_url, :portfolio_url, :portfolio_password, :twitter, :facebook, :github, :available, :avatar_url)
  end
end

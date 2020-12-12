class Api::V1::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    p 'params'
    word = params[:user][:session_token]
    @user = User.find_by_credentials(params[:user][:username], params[:user][:email], params[:user][:password], word)
    if @user
      login!(@user)
      render '/api/v1/users/show'
    else
      render json: { error: 'invalid username/email or password' }, status: 401
    end
  end

  def destroy
    @user = current_user
    username = @user.username
    if @user
      logout
      render json: { message: "successfully logged out as #{username}" }.to_json
    else
      render json: { error: 'Nobody signed in' }, status: 404
    end
  end
end

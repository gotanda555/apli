class TweetsController < ApplicationController

  before_action :move_to_index, except: [:index, :show]

  def index
    @all_ranks = Tweet.find(Like.group(:tweet_id).order('count(tweet_id) desc').limit(3).pluck(:tweet_id))
    if params[:q] == nil
      @results = Tweet.search(params[:q]).includes(:user).page(params[:page]).per(9).order("created_at DESC")
    else
      @results = Tweet.search(params[:q]).includes(:user).order("created_at DESC")
    end
    respond_to do |format|
      format.html
      format.json
    end

  end

  def new
  end

  def create
    Tweet.create(image: tweet_params[:image], text: tweet_params[:text], title: tweet_params[:title], user_id: current_user.id)
  end

  def destroy
    tweet = Tweet.find(params[:id])
    if tweet.user_id == current_user.id
      tweet.destroy
    end
  end

  def edit
    @tweet = Tweet.find(params[:id])
  end

  def update
    tweet = Tweet.find(params[:id])
    if tweet.user_id == current_user.id
      tweet.update(tweet_params)
    end
  end

  def show
    @tweet = Tweet.find(params[:id])
    @comments = @tweet.comments.includes(:user)
    @like = Like.new
  end

  private
    def tweet_params
      params.permit(:image, :text, :title)
    end

    def move_to_index
      redirect_to action: :index unless user_signed_in?
    end
    
end

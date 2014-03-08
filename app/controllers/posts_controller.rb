class PostsController < ApplicationController

	respond_to :html,:json

	def new
	end

	def create
		@post = Post.create(params.require(:post).permit(:photo, :title, :description))
		@post.save
		respond_with @post
	end

	def show
		@post = Post.find_by(:id=>[params[:id]])
		render 'show'
	end

  def upvote
    puts params[:id]
    @post = Post.find_by(:id=>[params[:id]])
    @post.increment! :vote_count
    respond_to do |format|
      format.json { render :json => @post }
    end
  end

  def downvote
    @post = Post.find_by(:id=>[params[:id]])
    if @post.vote_count > 0
      @post.decrement! :vote_count
    end
    respond_to do |format|
      format.json { render :json => @post }
    end
  end

end

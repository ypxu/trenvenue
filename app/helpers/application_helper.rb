module ApplicationHelper

	# return abosolute url for a post's photo
	def post_photo_url(photo, style = :medium)
		"#{request.protocol}#{request.host_with_port}#{photo.url(style)}"
	end
end

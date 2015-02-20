class ContactsController < ApplicationController

	def new
		@contact = Contact.new
	end

	def send_email
		c = Contact.new
		c.name = params[:guest_name]
		c.email = params[:guest_email]
		c.deliver

		flash[:test] = params[:name]

		respond_to do |format|
			format.json { render :json => "Success 200"}
		end
	end
end

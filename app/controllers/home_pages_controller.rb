class HomePagesController < ApplicationController
	require 'twilio-ruby'

	skip_before_action :verify_authenticity_token
	
	def index
		config = {
 			consumer_key: ENV['CONSUMER_KEY'],
 			consumer_secret: ENV['CONSUMER_SECRETS']
		}
		client = Twitter::REST::Client.new(config)
		@tweets = client.user_timeline("GoMoment", count: 10)
	end

	def demo
		account_sid = ENV['TWIL_SID']
		auth_token = ENV['TWIL_AUTH']
		number = params[:number]

		@client = Twilio::REST::Client.new account_sid, auth_token
		@client.messages.create(
				from: '+13238157265',
				to: '+1' + number,
				body: 'Thanks for visiting HomePage Hotel!'
			)

		respond_to do |format|
			format.json { render :json => "Success 200"}
		end
	end

	# def response
	# 	twiml = Twilio::TwiML::Response.new do |r|
 #    		r.Message "Your request has been sent to the front desk. Thank you."
 #  		end
 #  		twiml.text
	# end
end

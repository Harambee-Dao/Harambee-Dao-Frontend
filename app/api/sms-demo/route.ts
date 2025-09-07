import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { phoneNumber } = await req.json()

    if (!phoneNumber) {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 }
      )
    }

    // For demo purposes, we'll simulate the SMS sending
    // In production, this would use Twilio SDK
    const messageBody = `Harambee DAO Demo: Thank you for experiencing our prototype. Your vote to approve the 'Nakuru Corn Farm' project has been recorded. This is how we empower communities. Reply YES to approve, NO to reject.`

    // Simulate Twilio API call
    // In production, you would use:
    // const client = require('twilio')(accountSid, authToken)
    // const message = await client.messages.create({
    //   body: messageBody,
    //   from: process.env.TWILIO_PHONE_NUMBER,
    //   to: phoneNumber
    // })

    // For demo, we'll just log and return success
    console.log(`SMS Demo - Would send to ${phoneNumber}: ${messageBody}`)

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: 'SMS sent successfully',
      sid: 'demo_sms_' + Date.now()
    })

  } catch (error) {
    console.error('SMS API error:', error)
    return NextResponse.json(
      { error: 'Failed to send SMS' },
      { status: 500 }
    )
  }
}

// Production Twilio implementation (commented out for demo)
/*
import twilio from 'twilio'

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

export async function POST(req: Request) {
  try {
    const { phoneNumber } = await req.json()

    if (!phoneNumber) {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 }
      )
    }

    const messageBody = `Harambee DAO Demo: Thank you for experiencing our prototype. Your vote to approve the 'Nakuru Corn Farm' project has been recorded. This is how we empower communities. Reply YES to approve, NO to reject.`

    const message = await client.messages.create({
      body: messageBody,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber
    })

    return NextResponse.json({
      success: true,
      message: 'SMS sent successfully',
      sid: message.sid
    })

  } catch (error) {
    console.error('Twilio SMS error:', error)
    return NextResponse.json(
      { error: 'Failed to send SMS' },
      { status: 500 }
    )
  }
}
*/

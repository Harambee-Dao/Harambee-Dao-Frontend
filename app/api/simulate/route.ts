import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { userInput } = await req.json()

    if (!userInput) {
      return NextResponse.json(
        { error: 'Project input is required' },
        { status: 400 }
      )
    }

    // Simulate AI analysis based on input keywords
    const analysisResult = analyzeProject(userInput)

    return NextResponse.json(analysisResult)
  } catch (error) {
    console.error('Simulation API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

function analyzeProject(userInput: string): {
  approved: boolean
  score: number
  reason: string
} {
  const input = userInput.toLowerCase()
  
  // Simple keyword-based analysis for demo purposes
  const positiveKeywords = [
    'plant', 'farm', 'agriculture', 'crop', 'corn', 'maize', 'wheat', 'rice',
    'vegetables', 'fruits', 'organic', 'sustainable', 'irrigation', 'water',
    'education', 'school', 'training', 'skill', 'workshop', 'community',
    'health', 'medical', 'clinic', 'hospital', 'clean water', 'sanitation',
    'renewable', 'solar', 'wind', 'energy', 'infrastructure', 'road', 'bridge'
  ]

  const negativeKeywords = [
    'gambling', 'casino', 'lottery', 'speculation', 'crypto mining', 'mining',
    'weapon', 'arms', 'military', 'defense', 'luxury', 'jewelry', 'diamond',
    'alcohol', 'tobacco', 'drug', 'illegal', 'fraud', 'scam', 'pyramid'
  ]

  const locationKeywords = [
    'kenya', 'nakuru', 'nairobi', 'mombasa', 'kisumu', 'africa', 'east africa',
    'rural', 'village', 'community', 'local', 'regional'
  ]

  let score = 50 // Base score
  let approved = false
  let reason = ""

  // Check for positive keywords
  const positiveMatches = positiveKeywords.filter(keyword => input.includes(keyword))
  if (positiveMatches.length > 0) {
    score += positiveMatches.length * 10
    reason += `Project involves ${positiveMatches[0]} which is a positive indicator. `
  }

  // Check for negative keywords
  const negativeMatches = negativeKeywords.filter(keyword => input.includes(keyword))
  if (negativeMatches.length > 0) {
    score -= negativeMatches.length * 20
    reason += `Project involves ${negativeMatches[0]} which raises concerns. `
  }

  // Check for location specificity
  const locationMatches = locationKeywords.filter(keyword => input.includes(keyword))
  if (locationMatches.length > 0) {
    score += 15
    reason += `Specific location (${locationMatches[0]}) identified, good for verification. `
  }

  // Add some randomness for demo purposes
  const randomFactor = Math.random() * 20 - 10
  score += randomFactor

  // Ensure score is within bounds
  score = Math.max(0, Math.min(100, Math.round(score)))

  // Determine approval
  approved = score >= 70

  // Generate final reason if none was built
  if (!reason) {
    if (approved) {
      reason = "Based on satellite imagery analysis and market conditions, this project shows strong viability for success."
    } else {
      reason = "Project requires additional verification and may need more detailed planning before approval."
    }
  }

  // Add market analysis for approved projects
  if (approved && score > 80) {
    reason += " Market analysis shows strong demand and favorable conditions for this type of project."
  }

  return {
    approved,
    score,
    reason: reason.trim()
  }
}

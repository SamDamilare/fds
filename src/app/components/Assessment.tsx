import { useState } from "react";
import { CheckCircle, ArrowRight, ArrowLeft, Sparkles, Target, TrendingUp, AlertCircle } from "lucide-react";

export function Assessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 0,
      question: "How often do you experience workplace conflicts?",
      options: [
        { value: "rarely", label: "Rarely (Once every few months)", score: 1 },
        { value: "sometimes", label: "Sometimes (Monthly)", score: 2 },
        { value: "often", label: "Often (Weekly)", score: 3 },
        { value: "very-often", label: "Very Often (Daily)", score: 4 },
      ],
    },
    {
      id: 1,
      question: "When conflicts arise, how do you typically respond?",
      options: [
        { value: "avoid", label: "I tend to avoid the situation", score: 1 },
        { value: "accommodate", label: "I accommodate others' needs", score: 2 },
        { value: "compromise", label: "I seek a compromise", score: 3 },
        { value: "collaborate", label: "I work toward a collaborative solution", score: 4 },
      ],
    },
    {
      id: 2,
      question: "How confident do you feel having difficult conversations?",
      options: [
        { value: "not-confident", label: "Not confident at all", score: 1 },
        { value: "somewhat-confident", label: "Somewhat confident", score: 2 },
        { value: "confident", label: "Confident", score: 3 },
        { value: "very-confident", label: "Very confident", score: 4 },
      ],
    },
    {
      id: 3,
      question: "How well do you understand others' perspectives during conflicts?",
      options: [
        { value: "poorly", label: "I struggle to see their viewpoint", score: 1 },
        { value: "somewhat", label: "I sometimes understand", score: 2 },
        { value: "well", label: "I usually understand", score: 3 },
        { value: "very-well", label: "I always seek to understand first", score: 4 },
      ],
    },
    {
      id: 4,
      question: "How does conflict typically impact your work performance?",
      options: [
        { value: "severely", label: "Severely impacts my productivity", score: 4 },
        { value: "moderately", label: "Moderately affects my focus", score: 3 },
        { value: "slightly", label: "Slightly distracting", score: 2 },
        { value: "minimal", label: "Minimal impact", score: 1 },
      ],
    },
    {
      id: 5,
      question: "What's your main goal in conflict resolution?",
      options: [
        { value: "peace", label: "Restore peace quickly", score: 2 },
        { value: "fairness", label: "Ensure fairness for all", score: 3 },
        { value: "growth", label: "Use it as a growth opportunity", score: 4 },
        { value: "winning", label: "Win the argument", score: 1 },
      ],
    },
  ];

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach((q) => {
      const answer = answers[q.id];
      const option = q.options.find((opt) => opt.value === answer);
      if (option) {
        totalScore += option.score;
      }
    });
    return totalScore;
  };

  const getResultData = () => {
    const score = calculateScore();
    const maxScore = questions.length * 4;
    const percentage = (score / maxScore) * 100;

    if (percentage >= 75) {
      return {
        level: "Advanced",
        color: "green",
        title: "Excellent Conflict Resolution Skills",
        description: "You demonstrate strong abilities in managing and resolving conflicts. You're collaborative, empathetic, and proactive.",
        recommendations: [
          "Consider mentoring others in conflict resolution",
          "Explore advanced mediation training",
          "Lead conflict resolution workshops in your organization",
        ],
      };
    } else if (percentage >= 50) {
      return {
        level: "Intermediate",
        color: "blue",
        title: "Developing Conflict Resolution Skills",
        description: "You have a solid foundation but there's room for growth. You understand the basics but could benefit from refining your approach.",
        recommendations: [
          "Practice active listening techniques daily",
          "Work on understanding different conflict styles",
          "Consider one-on-one coaching sessions",
        ],
      };
    } else {
      return {
        level: "Beginner",
        color: "orange",
        title: "Building Conflict Resolution Foundation",
        description: "You're at the beginning of your conflict resolution journey. This is a great opportunity to develop essential skills.",
        recommendations: [
          "Start with our fundamentals workshop",
          "Learn about emotional intelligence",
          "Schedule an initial coaching consultation",
        ],
      };
    }
  };

  const handleAnswer = (value: string) => {
    setAnswers({
      ...answers,
      [currentStep]: value,
    });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  if (showResults) {
    const result = getResultData();
    const score = calculateScore();
    const maxScore = questions.length * 4;

    return (
      <div className="min-h-screen bg-neutral-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-[#1e3a5f] px-8 py-12 text-white text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <Sparkles className="size-4" />
                <span className="text-sm font-medium">Assessment Complete</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{result.title}</h2>
              <div className="text-6xl font-bold mb-2">
                {score}/{maxScore}
              </div>
              <p className="text-white/90 text-lg">Your Conflict Resolution Score</p>
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-14 rounded-xl bg-[#1e3a5f] flex items-center justify-center">
                    <Target className="size-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#1e3a5f] uppercase tracking-wide">
                      {result.level} Level
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">Your Results</h3>
                  </div>
                </div>
                <p className="text-lg text-neutral-600 leading-relaxed">{result.description}</p>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-8 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="size-6 text-[#1e3a5f]" />
                  <h3 className="text-xl font-semibold text-neutral-900">Recommended Next Steps</h3>
                </div>
                <ul className="space-y-3">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1e3a5f]/10 border border-[#1e3a5f]/30 rounded-2xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-lg bg-[#1e3a5f] flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="size-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Want Personalized Guidance?</h3>
                    <p className="text-neutral-600 mb-4">
                      This assessment provides a general overview. For personalized strategies tailored to your specific situation, schedule a one-on-one consultation.
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#e63946] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d62828] transition-colors"
                    >
                      Schedule Consultation
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleRestart}
                  className="flex-1 px-6 py-3 bg-neutral-100 text-neutral-700 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
                >
                  Retake Assessment
                </button>
                <a
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-[#1e3a5f] px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-all"
                >
                  Get in Touch
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const isAnswered = answers[currentStep] !== undefined;

  return (
    <div className="min-h-screen bg-neutral-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white px-4 py-2 rounded-full mb-4">
            <Sparkles className="size-4" />
            <span className="text-sm font-medium">Free Assessment</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Conflict Resolution Skills Assessment
          </h1>
          <p className="text-lg text-neutral-600">
            Discover your conflict resolution style and get personalized recommendations
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-[#1e3a5f] px-6 py-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-medium">
                Question {currentStep + 1} of {questions.length}
              </span>
              <span className="text-white font-medium">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-neutral-900">
              {currentQuestion.question}
            </h2>

            <div className="space-y-4 mb-8">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full p-6 rounded-xl border-2 text-left transition-all hover:shadow-lg ${
                    answers[currentStep] === option.value
                      ? "border-[#1e3a5f] bg-[#1e3a5f]/10"
                      : "border-neutral-200 bg-white hover:border-[#1e3a5f]/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`size-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        answers[currentStep] === option.value
                          ? "border-[#1e3a5f] bg-[#1e3a5f]"
                          : "border-neutral-300"
                      }`}
                    >
                      {answers[currentStep] === option.value && (
                        <CheckCircle className="size-4 text-white" />
                      )}
                    </div>
                    <span className="text-lg text-neutral-900">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="px-6 py-3 bg-neutral-100 text-neutral-700 rounded-lg font-medium hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
              >
                <ArrowLeft className="size-4" />
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className="flex-1 px-6 py-3 bg-[#e63946] text-white rounded-lg font-semibold hover:bg-[#d62828] transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
              >
                {currentStep === questions.length - 1 ? "View Results" : "Next Question"}
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-neutral-600">
            Your responses are confidential and will help us provide personalized recommendations
          </p>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { questionData } from './questionData';

export default function QuestionsPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D' | null>>({});
  const [showExplanations, setShowExplanations] = useState<Record<number, boolean>>({});

  const handleSelectAnswer = (questionId: number, answer: 'A' | 'B' | 'C' | 'D') => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const toggleExplanation = (questionId: number) => {
    setShowExplanations((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const getOptionClass = (questionId: number, option: 'A' | 'B' | 'C' | 'D') => {
    const selected = selectedAnswers[questionId] === option;
    const isCorrect = option === questionData.find((q) => q.id === questionId)?.correctAnswer;
    const showAnswer = showExplanations[questionId];

    let baseClass =
      'w-full p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer text-left font-medium';
    
    if (selected && !showAnswer) {
      return `${baseClass} border-blue-500 bg-blue-50 text-blue-700 shadow-md transform scale-[1.02]`;
    }
    
    if (showAnswer) {
      if (isCorrect) {
        return `${baseClass} border-green-500 bg-green-50 text-green-700 shadow-lg`;
      }
      if (selected && !isCorrect) {
        return `${baseClass} border-red-500 bg-red-50 text-red-700`;
      }
    }
    
    return `${baseClass} border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 hover:shadow-md`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-2">
            📚 刷题练习
          </h1>
          <p className="text-gray-600 text-lg">选择答案，点击查看解析</p>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {questionData.map((question, index) => {
            const selected = selectedAnswers[question.id];
            const showExplanation = showExplanations[question.id];
            const isCorrect = selected === question.correctAnswer;

            return (
              <div
                key={question.id}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Question Number & Title */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-sm text-gray-500">第 {index + 1} 题</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
                    {question.title}
                  </h2>
                </div>

                {/* Options */}
                <div className="space-y-3 mb-6">
                  {(['A', 'B', 'C', 'D'] as const).map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelectAnswer(question.id, option)}
                      disabled={showExplanation}
                      className={getOptionClass(question.id, option)}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex items-center justify-center w-8 h-8 rounded-lg font-bold text-sm ${
                            selected === option
                              ? showExplanation
                                ? isCorrect
                                  ? 'bg-green-500 text-white'
                                  : 'bg-red-500 text-white'
                                : 'bg-blue-500 text-white'
                              : showExplanation && option === question.correctAnswer
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {option}
                        </span>
                        <span className="flex-1">{question.options[option]}</span>
                        {showExplanation && option === question.correctAnswer && (
                          <span className="text-green-600 font-bold">✓</span>
                        )}
                        {showExplanation && selected === option && !isCorrect && (
                          <span className="text-red-600 font-bold">✗</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Show Explanation Button */}
                {selected && (
                  <button
                    onClick={() => toggleExplanation(question.id)}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      showExplanation
                        ? 'bg-gradient-to-r from-gray-500 to-gray-600 text-white'
                        : 'bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white hover:shadow-lg transform hover:scale-[1.02]'
                    }`}
                  >
                    {showExplanation ? '隐藏解析' : '查看解析'}
                  </button>
                )}

                {/* Explanation */}
                {showExplanation && (
                  <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 animate-fadeIn">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">💡</span>
                      <div className="flex-1">
                        <h3 className="font-bold text-blue-800 mb-2">答案解析</h3>
                        <p className="text-gray-700 leading-relaxed">{question.explanation}</p>
                        <div className="mt-3 pt-3 border-t border-blue-200">
                          <span className="text-sm text-gray-600">
                            正确答案：<span className="font-bold text-green-600">{question.correctAnswer}</span>
                          </span>
                          {selected && (
                            <span className="ml-4 text-sm text-gray-600">
                              你的答案：
                              <span
                                className={`font-bold ${
                                  isCorrect ? 'text-green-600' : 'text-red-600'
                                }`}
                              >
                                {selected}
                              </span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Stats */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md">
            <span className="text-gray-600">已完成</span>
            <span className="font-bold text-blue-600">
              {Object.keys(selectedAnswers).length} / {questionData.length}
            </span>
            <span className="text-gray-600">题</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}


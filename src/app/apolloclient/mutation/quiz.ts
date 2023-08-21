import gql from 'graphql-tag';

export const ANSWER_QUIZ = gql`
  mutation AnswerQuiz($answer_id: Int, $quiz_answers: JSON) {
    answerQuiz(input: { answer_id: $answer_id, quiz_answers: $quiz_answers }) {
      id
      quiz_questions
      correct_answers
      opening_date_time
      closing_date_time
      user_id
      answer_id
      quiz_answers
      is_active
      created_by
      created_date
      updated_by
      updated_date
      remarks
    }
  }
`;

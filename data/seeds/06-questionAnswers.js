
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('questionAnswers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('questionAnswers').insert([
        { question: 'What is the most beautiful view you’ve seen?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 1 },
        { question: 'What movie universe would be the worst to live out your life in?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 1 },
        { question: 'Would the world be a better or worse place if everyone looked the same?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 1 },
        { question: 'What are you interested in that most people haven’t heard of?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 2 },
        { question: 'What always lets you down and what never lets you down?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 2 },
        { question: 'What is the most annoying question that people ask you?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 2 },
        { question: 'Are there any songs that always bring a tear to your eye?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 3 },
        { question: 'How ambitious are you?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 3 },
        { question: 'What weird potato chip flavor that doesn’t exist would you like to try?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 3 },
        { question: 'What is the weirdest thing you have seen in someone else’s home?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 4 },
        { question: 'What’s your best one liner?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 4 },
        { question: 'What’s the most refreshing thing on a hot summer day?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 4 },
        { question: 'What are some accomplishments that you are really proud of?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 5 },
        { question: 'When do you feel most out of place?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 5 },
        { question: 'What’s one regret you have?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 5 },
        { question: 'What’s the most ironic thing you’ve seen happen?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 6 },
        { question: 'What are some goals you have already achieved?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 6 },
        { question: 'What do you fear is hiding in the dark?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 6 },
        { question: 'What household chore is just the worst?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 7 },
        { question: 'If you opened a business, what kind of business would it be?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 7 },
        { question: 'What’s the best thing about traveling? How about the worst thing?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 7 },
        { question: 'What’s the most boring super hero you can come up with?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 8 },
        { question: 'What game are / were you really good at?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 8 },
        { question: 'What are some songs you know by heart?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 8 },
        { question: 'Where is the strangest place you’ve urinated or defecated?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 9 },
        { question: 'In one sentence, how would you sum up the internet?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 9 },
        { question: 'What’s your earliest memory?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 9 },
        { question: 'What’s the most recent show you’ve binge watched?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 10 },
        { question: 'What sports do you like to watch?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 10 },
        { question: 'Do you feel like fall and spring are getting shorter?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 10 },
        { question: 'What’s your favorite international food?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 11 },
        { question: 'What technology from science fiction do you wish existed?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 11 },
        { question: 'What are your most important rules when going on a date?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 11 },
        { question: 'What’s the most annoying noise?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 12 },
        { question: 'What is the strangest app you have heard of or tried?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 12 },
        { question: 'What’s your perfect burger?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 12 },
        { question: 'What’s your story?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 13 },
        { question: 'What do you think existed before the universe was created?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 13 },
        { question: 'What’s the most essential part of a friendship?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 13 },
        { question: 'What’s the difference between justice and revenge?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 14 },
        { question: 'What’s the most amazing place in nature you’ve been?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 14 },
        { question: 'What’s the worst injury you’ve ever gotten?', p_answer1: 'possible', p_answer2: 'possible', p_answer3: 'possible', answer: 'here is the answer', quiz_id: 14 },
      ]);
    });
};
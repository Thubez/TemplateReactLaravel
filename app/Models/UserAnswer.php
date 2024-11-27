<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;
class UserAnswer extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_test_id', 'question_id', 'answer_option_id', 'created_at', 'updated_at'
    ];

    public function userTest()
    {
        return $this->belongsTo(UserTest::class);
    }

    public function question()
    {
        return $this->belongsTo(Question::class);
    }

    public function answerOption()
    {
        return $this->belongsTo(AnswerOption::class);
    }
}

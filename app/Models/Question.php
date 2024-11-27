<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'section_id', 'content', 'order', 'type', 'scoring_type', 'correct_points', 'incorrect_points'
    ];

    public function section()
    {
        return $this->belongsTo(Section::class);
    }

    public function answerOptions()
    {
        return $this->hasMany(AnswerOption::class);
    }
}

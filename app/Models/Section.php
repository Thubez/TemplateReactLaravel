<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Section extends Model
{
    use HasFactory;

    protected $fillable = [
        'test_id', 'name', 'order', 'duration'
    ];

    public function test()
    {
        return $this->belongsTo(Test::class);
    }

    public function questions()
    {
        return $this->hasMany(Question::class);
    }
}

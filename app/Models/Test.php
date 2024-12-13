<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Test extends Model
{
    use HasFactory;

    protected $fillable = [
        'test_type_id', 'title', 'test_date', 'duration'
    ];

    public function testType()
    {
        return $this->belongsTo(TestType::class);
    }

    public function sections()
    {
        return $this->hasMany(Section::class);
    }

    public function userTests()
    {
        return $this->hasMany(UserTest::class);
    }
}

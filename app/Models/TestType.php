<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TestType extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description'
    ];

    public function tests()
    {
        return $this->hasMany(Test::class);
    }
}

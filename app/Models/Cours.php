<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Cours extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'type',
        'content',
        'video_url',
        'duration',
        'is_free',
        'category_id',
        'user_id',
        'slug',
    ];

    protected static function booted()
    {
        static::creating(function ($cours) {
            if (empty($cours->slug)) {
                $cours->slug = Str::slug($cours->title);
            }
        });
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function lessons()
    {
        return $this->hasMany(Lesson::class);
    }
}

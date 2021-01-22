<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Floorplan extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'cover_image_id'];

    public function coverImage(): HasOne
    {
        return $this->hasOne(Image::class);
    }

    public function floorplanImages(): HasMany
    {
        return $this->hasMany(Image::class);
    }
}

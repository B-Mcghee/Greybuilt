<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Image extends Model
{
    use HasFactory;

    public function bioImage(): HasOne
    {
        return $this->hasOne(Image::class);
    }

    public function floorplanCoverImage(): BelongsTo
    {
        return $this->belongsTo(Floorplan::class);
    }

    public function floorplanImages(): BelongsTo
    {
        return $this->belongsTo(Floorplan::class);
    }

    public function projectCoverImage() : BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function projectImages() : BelongsTo
    {
        return $this->belongsTo(Project::class);
    }
}

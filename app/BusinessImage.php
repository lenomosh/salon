<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BusinessImage extends Model
{
    protected $guarded = [];
    public function business(): BelongsTo{
        return $this->belongsTo(Business::class,'is','business_id');
    }
}

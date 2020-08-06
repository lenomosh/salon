<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BusinessType extends Model
{
    //
    protected $guarded =[];
    public function businesses(): HasMany
    {
        return $this->hasMany(Business::class,'business_type_id','id');
    }
}

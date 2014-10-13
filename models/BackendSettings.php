<?php namespace Backend\Models;

use Lang;
use Model;

/**
 * Backend settings that affect all users
 *
 * @package october\backend
 * @author Alexey Bobkov, Samuel Georges
 */
class BackendSettings extends Model
{
    use \October\Rain\Database\Traits\Validation;

    public $implement = ['System.Behaviors.SettingsModel'];

    public $settingsCode = 'backend_settings';

    public $settingsFields = 'fields.yaml';

    public $attachOne = [
        'logo' => ['System\Models\File']
    ];

    /**
     * Validation rules
     */
    public $rules = [
        'app_name'     => 'required',
        'app_motto'    => 'required',
    ];

    public function initSettingsData()
    {
        $this->app_name = Lang::get('system::lang.app.name');
        $this->app_motto = Lang::get('system::lang.app.motto');

        // Carrot
        $this->primary_color = '#e67e22';

        // Midnight Blue
        $this->secondary_color = '#2b3e50';
    }

    public static function getLogo()
    {
        $settings = self::instance();
        if (!$settings->logo)
            return null;

        return $settings->logo->getPath();
    }

}